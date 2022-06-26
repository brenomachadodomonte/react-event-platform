import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live'|'class';
} 

export function Lesson(props: LessonProps) {

    const { slug } = useParams<{ slug: string }>();
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd'th 'MMMM' • ' k':'mm")

    const isActive = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={classNames(
                'rounded border border-gray-500 p-4 group-hover:border-green-500', {
                    'bg-green-500': isActive,
                }
            )}>
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable ? (
                            <span className={classNames('text-sm  font-medium flex items-center gap-2', {
                                'text-white': isActive, 
                                'text-blue-500': !isActive
                            })}>
                                <CheckCircle size={20}/>
                                Content released
                            </span>
                        ) : (
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20}/>
                                Coming soon
                            </span>
                        )
                    }
                    
                    
                    <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border', {
                        'border-white': isActive,
                        'border-green-300': !isActive,
                    })}>
                        { props.type === 'live' ? 'LIVE' : 'PRACTICE' }
                    </span>
                </header>

                <strong className={classNames('mt-5 block', {
                    'text-white': isActive, 
                    'text-gray-200': !isActive
                })}>
                    { props.title }
                </strong>
                    
            </div>
        </Link>
    )
}