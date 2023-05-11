export class Video {
    id: number;
    title: string;
    genre: string;
    public: boolean;
    nbrShared: number;
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.genre = '';
      this.public = true;
      this.nbrShared = 0;
    }
  }
  