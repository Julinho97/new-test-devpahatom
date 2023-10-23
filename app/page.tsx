import { DataTable } from "../components/tableCard/data-table";
import { columns } from './table/columns';
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/header'


async function getTables(): Promise<Table[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
}

export default async function Page() {
  try {
    const data = await getTables();

    return (
      <section className=" p-4 bg-[#f2f2f2];">
        
        <div className="container"><div className="mb-6 text-3xl font-boldf">
            <Header  ellipse="ellipse-1-2.png" property1="default" />
          </div>
          <div className="mb-6 z-50 text-3xl font-boldf absolute">
            <Sidebar  page="dashboard"text="DevPhantom" />
          </div>
          
        <div className="w-full">
          <DataTable columns={columns} data={data} />
          </div>
        </div>
      </section>  
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return (
      <div>
        Une erreur s'est produite lors de la récupération des données.
      </div>
    );
  }
}
