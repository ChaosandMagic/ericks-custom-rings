

Hooks.on("initializeDynamicTokenRingConfig", (ringConfig) => {

  const dynamicRings = [
    "aot-swarm",
    "dead-suns",
    "extinction-curse"
  ];

  for (const ring of dynamicRings) {
    const key = ring;
    const label = ring.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    const spritesheet = `modules/ericks-custom-rings/Assets/token-rings/${ring}/${ring}.json`;
    console.log("RING LOADED IS " + ring);

    ringConfig.addConfig(key, new foundry.canvas.tokens.DynamicRingData({
      key,
      label,
      spritesheet
      ,
      onload: (ring) => {
        console.log(`Loaded ring ${key}`, ring);
        console.log('Background frame:', ring.spritesheet.frames["ericks-token-rings"]);
      }
    })
    );

  };


});
