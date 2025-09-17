import '../styles/sloganRibbon.scss';

const SloganRibbon = ({title, content}: {title: string, content: string}) => {
    return(
        <>
        <div className='slogan-box'>
            <div className='slogan-item'>
                <p className='slogan-title'>{title}</p>
                <p className='slogan-subtitle'>{content}</p>
            </div>
        </div>
        </>
    )
}

export default SloganRibbon;