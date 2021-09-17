namespace camfiorimodel;

using {managed} from '@sap/cds/common';

entity Kunde {
    key ID               : Integer @title : 'KundenID';
        Name             : String  @title : 'Name';
        Rating           : String  @title : 'Rating';
        Strasse          : String  @title : 'Straße';
        Hausnummer       : String  @title : 'Hausnummer';
        PLZ              : String  @title : 'PLZ';
        Ort              : String  @title : 'Ort';
        kreditlimit      : Association to many Kreditlimit
                               on kreditlimit.kunde = $self;

}

entity SapAnwender {
    key ID          : Integer @title : 'SapAnwenderID';
        Vorname     : String  @title : 'Vorname';
        Nachname    : String  @title : 'Nachname';
        Rolle       : String  @title : 'Rolle';
        kreditlimit : Association to many Kreditlimit
                          on kreditlimit.sapanwender = $self;

}

entity Kreditlimit : managed {
    key ID          : Integer @title : 'KreditlimitID';
        Befristung  : Date    @title : 'Befristung';
        Hoehe       : Decimal @title : 'Höhe'; 
        Bemerkung   : String  @title : 'Bemerkung';
        Status      : String  @title : 'Status';
        sapanwender : Association to SapAnwender;
        kunde       : Association to Kunde;
}
