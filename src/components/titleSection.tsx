import '../styles/main.scss';

const TitleSection = ({title}: {title: string}) => {
    return(
        <>
        <div className='title-box'>
            <p className='page-title'>{title}</p>
            <br/>
        </div>
        </>
    )
}

export default TitleSection;