import Faker from "faker";

const DummyRoom = [];
for (let i = 0; i < 10; i++) {
  DummyRoom.push({
    id: Faker.random.uuid(),
    name: Faker.company.companyName(),
    logs: []
  });
  for (let j = 0; j < 20; j++) {
    DummyRoom[i].logs.push({
      user: Faker.internet.userName(),
      message: Faker.lorem.words(),
      created_at: Faker.date.past()
    });
  }
}

export default DummyRoom;
