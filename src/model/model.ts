export default class Model {
  options;
  baseURL;
  genres;
  constructor() {
    this.options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "2YDRCN4-GJJ4VXC-HX99D0W-HDBNKW8",
      },
    };
    this.baseURL = "https://api.poiskkino.dev/";
    this.genres = this.createRequest(
      "v1/movie/possible-values-by-field?field=genres.name",
    );
  }

  createFormData(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get("search");
    return query;
  }

  async createRequest(query: string) {
    const answer = await fetch(`${this.baseURL}${query}`, this.options);
    const data = await answer.json();
    // console.log(data);

    return data;
  }
}
//v1/movie/possible-values-by-field?field=genres.name
