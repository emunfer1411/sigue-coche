let velocidad = 50
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        velocidad = 50
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
