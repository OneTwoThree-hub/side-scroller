scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(0)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 . 2 . . . . . . . . 
    2 . . . . . 2 2 2 . . . . . . . 
    2 2 . . 2 2 2 . 2 2 2 . . . . . 
    . 2 2 2 2 2 . . . . 2 . . . . . 
    . . 2 . . . . . . . 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.ax = 100
scene.cameraFollowSprite(mySprite)
