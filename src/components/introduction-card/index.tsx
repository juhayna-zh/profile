
interface IntroductionCardProps {
  contents: string[];
}

/**
 * Renders an IntroductionCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the IntroductionCard.
 */
const IntroductionCard: React.FC<IntroductionCardProps> = ({
  contents
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        <div className="mx-3">
          <h5 className="card-title">
              <span className="text-base-content opacity-70">About Me 😉</span>
          </h5>
        </div>
        <div className="text-center mx-auto px-8">
          {contents.map(
            (content, _index) => (
              <div className="mt-3 text-opacity-60 w-full text-left" dangerouslySetInnerHTML={{__html: content}}></div>
            ),
          )}
          
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
