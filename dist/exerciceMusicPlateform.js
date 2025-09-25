console.log("HW");
// Code initial problématique (à refactorer avec POO + SOLID)
class MusicPlatform {
    constructor() {
        this.artists = [];
        this.releases = [];
        this.sales = [];
        // TODO: Refactorer tout ça avec la POO et les principes SOLID !
    }
    addArtist(artist) {
        this.artists.push(artist);
    }
    createRelease(release) {
        this.releases.push(release);
    }
    buyTrack(trackId, buyerEmail, paymentMethod) {
        // Code spaghetti qui mélange tout
        const track = this.findTrack(trackId);
        if (track && track.price) {
            if (paymentMethod === "paypal") {
                // logique PayPal
                console.log("PayPal payment processed");
            }
            else if (paymentMethod === "stripe") {
                // logique Stripe
                console.log("Stripe payment processed");
            }
            // Calcul des royalties
            const artistShare = track.price * 0.7;
            const platformFee = track.price * 0.3;
            // Envoi email
            console.log(`Sending email to ${buyerEmail}`);
            this.sales.push({
                trackId,
                buyerEmail,
                amount: track.price,
                date: new Date()
            });
        }
    }
    findTrack(trackId) {
        // Code inefficace qui parcourt tout
        for (const release of this.releases) {
            for (const track of release.tracks) {
                if (track.id === trackId)
                    return track;
            }
        }
        return null;
    }
}
