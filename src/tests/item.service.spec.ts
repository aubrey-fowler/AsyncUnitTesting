import { ItemService } from "~/app/item/item.service";

describe('item.service', () => {

    let service: ItemService;

    beforeEach(() => {
        service = new ItemService();
    });

    it('should be the expected result', () => {

        const result = service.getAsycValue();

        result.then((res) => {
            expect(res).toEqual('hello');
        });

    });

});