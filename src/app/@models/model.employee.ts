export class ModelEmployee {
  id!: string;
  name!: string;
  gender!: string;
  age!: number;
  address!: {
    state: string;
    city: string;
  };
}

export const ModelEmployeeKey = {
  Id: 'id',
  name: 'name',
  Gender: 'gender',
  Age: 'age',
  address: {
    State: 'state',
    City: 'city',
  },
};
