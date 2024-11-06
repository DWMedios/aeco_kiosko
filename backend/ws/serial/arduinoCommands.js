const sendCommandLetters = {
  START_PROGRAM: 'B',
  STOP_MOTORS: 'D',
  GREEN_LIGHTS: 'L',
  GREEN_LIGHTS_ALT: 'V',
  RED_LIGHTS: 'T',
  BLUE_LIGHTS: 'U',
  OPEN_CLOSE_COVER_S: 'S',
  OPEN_CLOSE_COVER_J: 'J',
  ROUTINE_OPEN: 'Z',
  DETECT_PAPER: 'Q',
  OPEN_CLOSE_COVER_R: 'R',
  INIT_PROGRAM: 'E',
  ADJUST_COVER_90: 'Y',
  ADJUST_COVER_0_GREEN: 'M',
  YELLOW_LIGHTS: 'W',
  ADJUST_COVER_90_BUZZER: 'C',
  ADJUST_COVER_0_GREEN_INIT: 'K',
  ENABLE_PAYMENT_MODE: 'X',
  DISABLE_PAYMENT_MODE: 'I',
  SET_UP_PROGRAM: 'YWDY',
  MAIN_INIT_PROGRAM: 'BEBJ',
}

const receivedCommandArduino = {
  P: 'DEPOSITS_UPDATE_MAINTENANCE',
  A: 'COINS_BALANCES_UPDATE',
  I: 'BOTTLE_INSERTION_INDICATION',
  E: 'COVER_OPEN_CLOSE_ERROR',
  C: 'GOOD_BOTTLE_INDICATION',
  U: 'COVER_OPEN_INDICATION',
  W: 'MAINTENANCE_NEEDED',
  X: 'FULL_DEPOSIT',
}

module.exports = { sendCommandLetters, receivedCommandArduino }
