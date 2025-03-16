priority: 0;

StartupEvents.registry("block", (event) => {
  /**
   * Freeze the specified block with the given resource location.
   *
   * @param {string} block - The type of block to freeze.
   * @param {string} resourceLocation - The location of the resource used for the texture.
   */

  function freeze(block, resourceLocation) {
    event
      .create(`frozenopolis:frozen_${block}`)
      .tagBlock("minecraft:mineable/pickaxe")
      .material("stone")
      .hardness(3.0);
  }

  /**
   * Creates a new block named frozen_{tbID} with the provided resourceLocation as its texture.
   *
   * @param {string} block_id - The ID of the original block to be frozen.
   */

  function freezeOre(block_id) {
    let bID = block_id.slice(block_id.indexOf(":") + 1, block_id.length);
    let modID = block_id.slice(0, block_id.indexOf(":"));
    event
      .create(`frozenopolis:frozen_${bID}`)
      .tagBlock("minecraft:mineable/pickaxe")
      .material("stone")
      .hardness(3.0);
  }

  let stones = [
    "stone",
    "diorite",
    "granite",
    "andesite",
    "deepslate",
    "netherrack",
  ];

  let ores = [
    "elementalcraft:inert_crystal_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:nether_gold_ore",
    "minecraft:ancient_debris",
    "minecraft:diamond_ore",
    "minecraft:redstone_ore",
    "minecraft:copper_ore",
    "minecraft:iron_ore",
    "thermal:cinnabar_ore",
    "thermal:apatite_ore",
    "thermal:nickel_ore",
    "thermal:sulfur_ore",
    "thermal:silver_ore",
    "thermal:niter_ore",
    "thermal:lead_ore",
    "thermal:tin_ore",
  ];

  stones.forEach((block) => {
    freeze(block);
  });

  ores.forEach((block) => {
    freezeOre(block);
  });

  // weather changer block
  event
    .create(`frozenopolis:weather_changer`)
    .tagBlock("minecraft:mineable/pickaxe")
    .material("stone")
    .displayName("天气改变器")
    .hardness(4.0);
});
  
