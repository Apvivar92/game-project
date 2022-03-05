// Need a hitbox for the objects to intersect rather than pinpoint positions
// cite for hitbox function https://wdw.scottylabs.org/javascript/lab/#:~:text=To%20do%20this%2C%20call%20the%20draw%20%28%29%20method,a%20string%20representing%20the%20color%20of%20the%20rectangle
Hitbox = function (x, y, w, h) {
  // default: Hitbox(0, 0, 50, 50)
  this.x = x != null ? x : 0;
  this.y = y != null ? y : 0;
  this.width = w != null ? w : 50;
  this.height = h != null ? h : 50;

  /**
   * Determines if this Hitbox contains an (x,y) point
   */
  this.contains = function (x, y) {
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    )
      return true;
    else return false;
  };

  /**
   * Determines if this Hitbox intersects another Hitbox
   * @param hitbox the Hitbox to check for intersection
   */
  this.intersects = function (hitbox) {
    if (
      this.contains(hitbox.x, hitbox.y) ||
      this.contains(hitbox.x + hitbox.width, hitbox.y) ||
      this.contains(hitbox.x, hitbox.y + hitbox.height) ||
      this.contains(hitbox.x + hitbox.width, hitbox.y + hitbox.height)
    )
      return true;
    else if (
      hitbox.contains(this.x, this.y) ||
      hitbox.contains(this.x + this.width, this.y) ||
      hitbox.contains(this.x, this.y + this.height) ||
      hitbox.contains(this.x + this.width, this.y + this.height)
    )
      return true;

    return false;
  };

  this.updateHitboxPosition = function (x, y) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
  };
};