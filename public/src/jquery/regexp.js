/**
 * Created by heben on 2017/4/29.
 */

let rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

exports.rnothtmlwhite = rnothtmlwhite;
exports.stripAndCollapse = function( value ) {
    let tokens = value.match( rnothtmlwhite ) || [];
    return tokens.join( " " );
};
