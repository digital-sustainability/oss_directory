import { DataTypes, Factory } from './factory';

describe('Factory', () => {

  beforeEach(() => {
   
  });

  for (let item in DataTypes) {
		it ('should create: ' + item, () => {
			let result = Factory.createNew(item);
			expect(result).toBeTruthy();
		});
	}

	it ('should throw if false name is provided', () => {
		expect(Factory.createNew.bind(null, "test")).toThrow();
	})
});