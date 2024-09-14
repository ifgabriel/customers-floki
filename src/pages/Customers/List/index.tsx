
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { Pagination, Radio, SearchField } from '../../../components'
import { UserGender } from '../../../domains/usecases'
import { useGetUsers } from '../../../services/users/getUsers'
import { handleRenderState } from '../../../utils'
import styles from './styles.module.scss'

interface FilterProps {
  gender?: UserGender,
  name?: string
}
const List = () => {
  const [searchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 7

  const {
    watch,
    control,
    register,
  } = useForm<FilterProps>()

  const { data, isLoading, isError } = useGetUsers({ ...watch(), page, results: itemsPerPage })

  return (
    <main className={styles.container}>
      <header>
        <SearchField placeholder="Search Name" {...register('name')} />
        <div>
          <Radio.Group id='gender'>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <>
                  <Radio.Button
                    {...field}
                    value="male"
                    checked={field.value === "male"}
                    onChange={() => field.onChange("male")}
                  >
                    Male
                  </Radio.Button>
                  <Radio.Button
                    {...field}
                    value="female"
                    checked={field.value === "female"}
                    onChange={() => field.onChange("female")}
                  >
                    Female
                  </Radio.Button>
                </>
              )}
            />
          </Radio.Group>
        </div>

      </header>
      {{
        view: (
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map((customer, index) => (
                  <tr key={index}>
                    <td>ID{customer.id}</td>
                    <td>
                      <div>
                        <img src={customer.picture} />
                        {customer.name} {customer.name}
                      </div>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.location}</td>
                    <td>{customer.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
        empty: (
          <span>empty</span>
        ),
        error: (
          <span>error</span>
        ),
        loading: (
          <span>loading</span>
        )
      }[handleRenderState({ data: data?.results, isLoading, isError })]}
      <Pagination
        totalPages={20}
      />
    </main>
  )
}


export default List