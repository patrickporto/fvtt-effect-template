class Profile {
  getItemByChatMessage({ content, speaker }) {
    const itemId = $(content).data("item-id")
    const items = getProperty(speaker, "token.actor.items") || game.items
    return items.get(itemId)
  }
}

export default Profile
