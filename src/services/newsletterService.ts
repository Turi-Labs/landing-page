import Airtable from 'airtable';

interface Subscriber {
  name: string;
  email: string;
}

export class NewsletterService {
  private base: Airtable.Base;
  private table: Airtable.Table<any>;
  // console.log("Start")
  constructor() {
    // Configure Airtable
    Airtable.configure({
      apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
    });

    this.base = Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID);
    this.table = this.base('TuriLabs Newsletter list');
  }

  async addSubscriber(subscriber: Subscriber) {
    try {
      const record = await this.table.create([
        {
          fields: {
            Name: subscriber.name,
            email: subscriber.email
          }
        }
      ]);

      return record[0];
    } catch (error) {
      console.error('Error adding subscriber:', error);
      throw error;
    }
  }
}
