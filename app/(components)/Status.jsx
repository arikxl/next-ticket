
const Status = ({ status }) => {

  const getColor = (status) => {
    let color = 'bg-slate-700';
    switch (status) {
      case 'Done':
        color = 'bg-green-200'
        return color;
      case 'Started':
        color = 'bg-yellow-200'
        return color;
      case 'Not Started':
        color = 'bg-red-400'
        return color;
      }
      return color;
  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </span>
  )
}

export default Status;