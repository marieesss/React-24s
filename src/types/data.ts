export type data = {
    [key: string] : number
}

export type BpiResponseTime = {
    updated : string;
    updatedISO: string
}

export type BpiResponse = {
    bpi : data, 
    disclaimer : string, 
    time : BpiResponseTime
}