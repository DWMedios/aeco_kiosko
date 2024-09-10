import {
  ArrayContainersConditions,
  ContainersConditions,
} from "../../../interfaces";

const ContainerConditions = ({
  containers = [],
}: ArrayContainersConditions) => {
  const ListConditions = (conditions) => {
    console.log("🚀 ~ ListConditions ~ conditions:", conditions);
    return (
      <ul className="list-disc list-inside pl-4 space-y-2">
        {conditions.conditions.map((condition: string) => (
          <li key={condition} className="tracking-wider">
            {condition}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      (
      {containers.map((containerObj: ContainersConditions) => (
        <div
          key={containerObj.container.name}
          className="w-1/2 flex flex-row justify-center text-3xl"
        >
          <ListConditions conditions={containerObj.conditions} />
          <img src={containerObj.container.icon} alt="" className="w-20 mx-2" />
        </div>
      ))}
      )
    </>
  );
};

export default ContainerConditions;
