export interface Policy {
  id: string;
  name: string;
  category: 'Education' | 'Health' | 'Agriculture' | 'Women' | 'Senior Citizens' | 'Employment' | 'Housing';
  description: string;
  eligibility: string;
  ageLimit: string;
  documents: string[];
  charges: string;
  applicationProcess: string[];
  whereToApply: {
    online?: string;
    offline?: string;
  };
  officialLink: string;
}

export type Category = Policy['category'];
