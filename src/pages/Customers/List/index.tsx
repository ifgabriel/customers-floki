import { useState } from 'react'
import { Radio, SearchField } from '../../../components'
import { UserGender } from '../../../domains/usecases'

import { useGetUsers } from '../../../services/users/getUsers'
import { handleRenderState } from '../../../utils'
import styles from './styles.module.scss'

const List = () => {
    const [filter, setFilter] = useState(undefined)
    const [gender, setGender] = useState<UserGender | undefined>(undefined)


    const { data, isLoading, isError } = useGetUsers({ name: filter, gender })


    return (
        <main className={styles.container}>
            <header>
                <SearchField placeholder="Search Name" onChange={(event) => setFilter(event.target.value)} value={filter} />
                <div>
                    <Radio.Group value={gender} onChange={setGender}>
                        <Radio.Button value='male'>
                            Male
                        </Radio.Button>
                        <Radio.Button value='female'>
                            Female
                        </Radio.Button>
                    </Radio.Group>
                </div>
                {{
                    view: (
                        <span>view</span>
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
                }[handleRenderState({ data, isLoading, isError })]}
            </header>
        </main>
    )
}


export default List