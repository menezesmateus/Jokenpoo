function playerChoice({choice}) {
    if (choice === 0) {
        return 'pedra.png'
    } else if (choice === 1) {
        return 'papel.png'
    } else {
        return 'tesoura.png'
    }
}
export default playerChoice