import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface IProps {
    children: string;
}

const ExpandableText = ( { children } : IProps) => {

    const [expanded, setExpanded] = useState(false)
    const limit = 300

    if(!children) return null

    if(children.length <= limit)
        return <Text>{children}</Text>
    const summary = expanded ? children : children.substring(0, limit) + '...'

    return(
        <>
    <Text>{summary} 
        <Button marginLeft={1} size='xs' fontWeight='bold' colorScheme='cyan' onClick={()=> setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Read more'}</Button>
        </Text>
        </>
    )
}

export default ExpandableText