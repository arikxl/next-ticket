import Form from '../../(components)/Form';

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to get ticket.')
  }

  return res.json();
}

const TicketPage = async ({ params }) => {
  const editMode = params.id === 'new' ? false : true;

  let updateTicketData = {}

  if (editMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket
  } else {
    updateTicketData = {
      _id: 'new'
    }
  }


  return (
    <Form ticket={ updateTicketData} />
  )
}

export default TicketPage