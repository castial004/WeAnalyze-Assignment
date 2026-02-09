export function ImageConatiner({url}){
    return(
        <>
            <div className="container mx-auto">
                <img className="w-full rounded-xl" src={`${url}`}></img>
            </div>
        </>
    )
}