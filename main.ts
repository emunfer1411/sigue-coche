let velocidad = 40
let contador = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        velocidad = 50
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
            for (let index = 0; index < 4; index++) {
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            }
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        }
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (contador == 500) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (contador == 1000) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        contador = 0
    }
    contador = contador + 1
})
