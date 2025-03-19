export class ApiUtil {
    static envWrap(partialEndpoint) {
        return `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${partialEndpoint}`;
    }
}