type pmat = ^matrix;

var p : pcsv;
    r, c : pheadervec;
    m : ^matrix;

(*! Read in one of the file parameters and extract the data from it *)
procedure rf(var ch : channel; param : integer);
begin
    with ch do
    begin
        p := parsecsvfile(paramstr(param));

        if p = nil then
            begin
                writeln('error opening or parsing file ', paramstr(param));
                halt(2);
            end
        else;
            r := getrowheaders(p);
            c := getcolheaders(p);
            m := getdatamatrix(p);
    end;
end;

var iot : channel;
    L, V, O, O1 : ^vector;
    square : ^matrix;
    i, j : integer;

begin
    rf(iot, 1);

    new(L, iot.m^.cols);
    new(V, iot.m^.cols);
    new(O, iot.m^.cols);
    new(O1, iot.m^.cols);

    L^ := 1;
    V^ := iot.m^[iot.m^.rows - 1];
    O^ := iot.m^[iot.m^.rows];

    new(square, iot.m^.cols, iot.m^.cols);
    square^ := trans iot.m^;

    for i := 1 to 20 do
    begin
        o1^ := V^+ \+ (L^ * square^);
        L^ := O1^ / O^;
    end;

    writeln(O1^:12:1, O^:12:1);
end.


O0