import Table from "@components/ui/Table";
import useAPI from "@hooks/useAPI";
import useTable from "@hooks/useTable";
import { endpoints } from "@lib/config/global-variable";
import useGlobalStore from "@store";
import { TSettingTable } from "@types";

type TData = {
    "title": string;
    "body": string;
    id: string;
}

const ExampleTable = () => {
    const { isLoading } = useGlobalStore()
    const { apiClient } = useAPI()

    const configTable = useTable<TData, false>({
        initialColumn: [
            {
                name: "Title",
                key: "title",
                isSorted: true
            },
            {
                name: "Body",
                key: "body",
                className: " text-center justify-center",
            },
        ],
        initialSetting: {
            checked: true,
            pagination: true,
        },
        onFetchData: handleFetchData
    })

    async function handleFetchData(params: TSettingTable<TData>): Promise<TData[]> {
        const resposne = await apiClient({
            endpoint: `${endpoints.posts}?_limit=${params?.itemsPerPage}&_page=${params?.currentPage}`
        })
        return resposne.data as TData[]
    }


    return (
        <div className="p-[5rem]">
            <Table<TData, false>
                {...configTable}
                withNo
                isLoading={isLoading}
            />
        </div>
    )
}



export default ExampleTable