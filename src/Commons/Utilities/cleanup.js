import deleteKey from "key-del";

const cleanup = ({arrived, predicate}, callback) => {
    const objective = arrived;
    const updated = deleteKey(objective, predicate)

    return callback(updated);
}

export default cleanup;
