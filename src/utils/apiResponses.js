// class ApiResponse {
//     constructor(statusCode, data, message="Success"){
//         this.statusCode = statusCode,
//         this.data = data,
//         this.message = message,
//         this.success = statusCode < 400
//     }
// }

const apiResponse = (res, statusCode, data, message) => {
    return res.status(statusCode).json({
        data,
        message
    });
}


export { apiResponse }