console.log("HW")

// Exercice NON COMMENCE

// Types de base (code legacy à refactorer)
interface Track {
  id: string;
  title: string;
  duration: number; // en secondes
  price?: number;
}

interface Artist {
  id: string;
  name: string;
  genre: string;
}

interface Release {
  id: string;
  title: string;
  artist: Artist;
  tracks: Track[];
  releaseDate: Date;
  type: string; // "single", "album", "ep"
}

// Code initial problématique (à refactorer avec POO + SOLID)
class MusicPlatform {
  private artists: Artist[] = [];
  private releases: Release[] = []
  private sales: any[] = [];

  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  createRelease(release: Release): void {
    this.releases.push(release);
  }

  buyTrack(trackId: string, buyerEmail: string, paymentMethod: string): void {
    // Code spaghetti qui mélange tout
    const track = this.findTrack(trackId);
    if (track && track.price) {
      if (paymentMethod === "paypal") {
        // logique PayPal
        console.log("PayPal payment processed");
      } else if (paymentMethod === "stripe") {
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

  private findTrack(trackId: string): Track | null {
    // Code inefficace qui parcourt tout
    for (const release of this.releases) {
      for (const track of release.tracks) {
        if (track.id === trackId) return track;
      }
    }
    return null;
  }

  // TODO: Refactorer tout ça avec la POO et les principes SOLID !
}