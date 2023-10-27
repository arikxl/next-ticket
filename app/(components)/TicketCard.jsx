import Link from 'next/link'

import Status from './Status'
import Delete from './Delete'
import Priority from './Priority'
import ProgressBar from './ProgressBar'

const TicketCard = ({ ticket }) => {

    const formatDate = (time) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour24: true
        };

        const date = new Date(time);
        const formatTime = date.toLocaleString("he-IL", options);
        return formatTime;
    }

    return (
        <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 '>
            <div className='flex mb-3 '>
                <Priority priority={ticket.priority} />
                <div className='ml-auto'>
                    <Delete id={ticket._id} />
                </div>
            </div>
            <Link href={`/ticket/${ticket._id}`}>
                <h4>{ticket.title}</h4>
                <hr className='h-px border-0 bg-page mb-2' />
                <p className='whitespace-pre-wrap'>{ticket.desc}</p>
                <div className='flex-grow'></div>
                <div className='flex mt-2 '>
                    <div className='flex flex-col '>
                        <p className='text-xs my-1 '>
                            {formatDate(ticket.createdAt)}
                        </p>
                        <ProgressBar progress={ticket.progress} />
                    </div>
                    <div className='ml-auto flex items-end'>
                        <Status status={ticket.status} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TicketCard