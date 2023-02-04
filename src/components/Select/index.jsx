import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'
import * as Label from '@radix-ui/react-label'
import { TitleContainer } from './styled'

const Select = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null)

	const promiseOptions = (inputValue) =>
		inputValue
			? fetch(`https://search.reservamos.mx/api/v2/places?q=${inputValue}`)
					.then((response) => response.json())
					.catch(() => [])
			: Promise.resolve([])

	const handleOnChange = (searchData) => {
		setSearch(searchData)
		onSearchChange(searchData)
	}

	return (
		<>
			<TitleContainer>
				<Label.Root>
					Check the ideal weather for your next destination
				</Label.Root>
			</TitleContainer>

			<AsyncSelect
				placeholder='Search for a city'
				defaultOptions
				value={search}
				onChange={handleOnChange}
				loadingMessage={() => `Loading`}
				cacheOptions
				getOptionLabel={(option) =>
					`${option.display} (${option.country}, ${option.state})`
				}
				loadOptions={promiseOptions}
			></AsyncSelect>
		</>
	)
}

export default Select
