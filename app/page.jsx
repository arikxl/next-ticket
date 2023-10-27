import Image from 'next/image'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tickets', {
      cache: "no-store"
    });

    return res.json();
  } catch (error) {
    console.error("Failed to get tickets",error);
  }
}

export default async function Home() {

  const {tickets} = await getTickets();
  
  const categories = [
    ...new Set(tickets?.map(({category}) => category))
  ]

  return (
    <main className='py-5 px-16'>
      <div>
        {tickets && categories?.map((c, idx) => (
          <div key={ idx} className='mb-4'>
            <h2>{ c}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-cols-4 gap-4'>
              {tickets.filter((ticket) => ticket.category === c).map((t, tIdx) => (
                <TicketCard ticket={t} key={ t._id} />
              ))}
            </div>
          </div>
        ) )}
  
      </div>
    </main>
  )
}


