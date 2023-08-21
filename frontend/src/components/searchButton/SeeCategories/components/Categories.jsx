export default function Categories({ imgUrl, id, category }) {
    return (
        <div className="flex flex-col items-center mx-4">
            <div className="rounded-lg overflow-hidden w-[400px] h-[250px]">
                <img
                    src={imgUrl}
                    alt={`Category ${id} image`}
                    className="scale-125"
                />
            </div>
            <h3 className="my-4 text-[1.5rem] font-medium">
                {category}</h3>
        </div>
    )
}