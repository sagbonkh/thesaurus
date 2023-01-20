import moment from "moment";

var datetime = ()=>
{
    var showdate = new moment().format('LLL');
    return(
        <div>
            <center>
                {showdate}
            </center>
        </div>
    );
}

export default datetime;