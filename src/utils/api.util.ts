export class ApiUtil {
    public static envWrap(partialEndpoint: string) {
        return `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${partialEndpoint}`;
    }
}
