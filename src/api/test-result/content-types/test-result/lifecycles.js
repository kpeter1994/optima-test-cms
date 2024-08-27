module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    const user = event.state.user;

    if (user) {
      data.owner = user.id; // Beállítjuk az owner mezőt a bejelentkezett felhasználóra
    }
  },
};
