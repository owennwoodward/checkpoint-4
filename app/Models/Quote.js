


export class Quote {
    constructor(data) {
        this._id = data._id
        this.tags = data.tags
        this.content = data.content
        this.author = data.author
        this.authorSlug = data.authorSlug
        this.length = data.length
    }



    get Template() {
        return `
        <div class="col-4">
        <div class="quote text-light"><h2>${this.content}</h2></div>
        <div class="hide text-light"><h3>${this.author}</h3></div>
      </div>
        `
    }
}