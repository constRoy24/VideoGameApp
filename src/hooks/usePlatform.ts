import usePLatforms from "./usePlatforms"

const usePlatform = (id?:number) => {

    const {data : platforms} = usePLatforms()
return platforms?.results.find(p => p.id === id)

}

export default usePlatform