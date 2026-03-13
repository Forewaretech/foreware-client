import Link from "next/link";
import Button from "../Buttons/Button";

const Support = () => {
  return (
    <div>
      {/* Support Section */}
      <div className="mt-20 bg-foreware-3 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-xl font-bold mb-2">Need a custom build?</h3>
          <p className="text-gray-400 text-sm">
            If your organization requires a specific environment configuration
            or legacy support, our engineers can help.
          </p>
        </div>
        <Link href="/contact">
          <Button className="bg-white text-dark-1 hover:bg-primary hover:text-white border-none px-8">
            Request Custom Build
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Support;
