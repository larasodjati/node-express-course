function capitalizeTaskName(name){
    const words = name.split(' ')
    return words
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
        .join(' ');
}
module.exports = {capitalizeTaskName};