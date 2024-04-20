
export default interface IResponse {
    type: 'Success' | 'Error',
    code: number,
    message: any
}