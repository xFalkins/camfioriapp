using camfiorimodel as my from '../db/camfiorimodel';

service CamFioriService {
    entity Kunde as projection on my.Kunde;
    entity SapAnwender as projection on my.SapAnwender;
    entity Kreditlimit as projection on my.Kreditlimit;
}

